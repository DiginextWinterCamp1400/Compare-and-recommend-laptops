
from rest_framework.views import APIView
from rest_framework import filters
from .models import Laptop
from .serializers import LaptopSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from .engine import makeRecommendation
import numpy as np



'''Override get_search_fields method of SearchFilter'''
class DynamicSearch(filters.SearchFilter,):
    def get_search_fields(self,view, request):
        return request.GET.getlist('search_fields',[])

'''Override page_size_query_param attribute of PageNumberPagination'''
class CustomizePagination(PageNumberPagination):
    page_size_query_param = 'limit'


"""Pagination Handler"""
class PaginationHandlerMixin(object):
    @property
    def paginator(self):
        if not hasattr(self, '_paginator'):
            if self.pagination_class is  None:
                 self._paginator =None
            else :
                self._paginator = self.pagination_class()
        else :
            pass

        return self._paginator

    def  paginate_queryset(self,queryset):
        if self.paginator is None:
            return None
        
        return self.paginator.paginate_queryset(queryset, self.request, view=self)

    def get_paginated_response(self,data):
        if self.paginator is None:
            raise "Paginator is None"
        return self.paginator.get_paginated_response(data)



class SearchLaptop(APIView,PaginationHandlerMixin):
    def __init__(self,):
        APIView.__init__(self)
        self.search_class=DynamicSearch
        self.pagination_class=CustomizePagination

    def filter_queryset(self,queryset):
      filterd_queryset=self.search_class().filter_queryset(self.request,queryset,self)
      return filterd_queryset

    def order_list(self,queryset,param):
        field=param.split('_')[0]
        sorting=param.split('_')[1]
        if sorting=='asc':
            return queryset.order_by(field)
        elif sorting=='desc':
            return queryset.order_by(field).reverse()
        

    def get(self, request):
        laptops= Laptop.objects.all()
        filtered_queryset=self.filter_queryset(laptops)
        order_field=request.query_params.get('order_by',None)
        if order_field is not None:
            filtered_queryset=self.order_list(filtered_queryset,order_field) 

        #Get appropriate results for each page
        results=self.paginate_queryset(filtered_queryset)
        if(results is not None):
            serializer=LaptopSerializer(results,many=True)
            serializer=self.get_paginated_response(serializer.data)
        else :
            serializer=LaptopSerializer(filtered_queryset,many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)



class Recommend_Segment(APIView):
    def get(self, request):
        lps= Laptop.objects.order_by('numberofsearch').reverse()[:4]
        items=np.array([])
        for item in lps:
            temp=makeRecommendation(item.id)
            items=np.concatenate((temp,items))

        lps=Laptop.objects.filter(id__in=items)
        serializer=LaptopSerializer(lps,many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class Register(APIView):
    
    def find_instance(self,pk):
        try:
            laptop=Laptop.objects.get(pk=pk)
            return laptop
        except Laptop.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self,request,pk):
        laptop=self.find_instance(pk)
        serializer=LaptopSerializer(laptop,data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

        return Response(status=status.HTTP_200_OK)
