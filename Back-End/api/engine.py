import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler

def makeRecommendation(laptop_id):
    df=pd.read_csv("api\laptop_price.csv",encoding='latin-1')

    """Preprocessing"""
    "This section belongs to the nominal data type"
    #convert Gpu's values to Intel,AMD,Nvidia 
    df.Gpu=df.Gpu.apply(lambda x:x.split(" ")[0])
    #apply one hot encoding for Company,TypeName,Gpu,OpSys
    encoded_df=pd.get_dummies(df,columns=['Company','TypeName','Gpu','OpSys'])

    "This section belongs to the ordinal data type"
    #convert ScreenResolution,Cpu,Ram,Memory,Weight from object data type to float type
    # ScreenResolution
    encoded_df.ScreenResolution=encoded_df.ScreenResolution.apply(lambda x:np.prod(list(map(float,x.split(" ")[-1].split("x")))))
    # Cpu
    encoded_df.Cpu=encoded_df.Cpu.apply(lambda x:float(x.split(" ")[-1][:-3]))
    # Ram
    encoded_df.Ram=encoded_df.Ram.apply(lambda x:float(x[:-2]))
    # Memory
    encoded_df.Memory=encoded_df.Memory.apply(lambda x:float(x.split(" ")[0][:-2]))
    # Weight
    encoded_df.Weight=encoded_df.Weight.apply(lambda x:float(x[:-2]))

    # drop laptop_ID, Product
    encoded_df.drop("laptop_ID",axis=1,inplace=True)
    encoded_df.drop("Product",axis=1,inplace=True)

    columns=encoded_df.columns

    #Normalize encoded_df
    mmc=MinMaxScaler()
    normal_df=pd.DataFrame(mmc.fit_transform(encoded_df),columns=columns)

    corr=normal_df.corrwith(normal_df.iloc[laptop_id],axis=1)
    indexes=np.array(corr.loc[corr>= 0.88].index)

    return np.unique(np.random.choice(indexes,4))

if __name__ == '__main__':
    print(makeRecommendation(100))
