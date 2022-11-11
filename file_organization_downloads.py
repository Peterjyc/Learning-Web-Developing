import os
from typing import List

ext_movie = ['.avi', '.flv', '.mov', '.mp4', '.mpeg', '.wma', '.wmv']
ext_photo = ['.gif', '.jpg', '.jpeg', '.png', '.psd']
ext_document = ['.doc', '.docx', '.pdf', '.ppt', '.txt', '.xlm', '.xlsm', '.xls']
ext_audio = ['.wav', '.m4a', '.mp3']
ext_executable = ['.exe', '.iso', '.rar', '.zip', '.msi']
ext_list = [ext_movie, ext_photo, ext_document, ext_audio, ext_executable]

file_path = "c:/users/peter/downloads"
file_path_video = "c:/users/peter/downloads/videos"
file_path_photo = "c:/users/peter/downloads/photos"
file_path_document = "c:/users/peter/downloads/documents"
file_path_audio = "c:/users/peter/downloads/audio"
file_path_other = "c:/users/peter/downloads/other"
#Create corresponding folders
#Movie
if not os.path.exists(f"{file_path}/Videos"):
    os.mkdir(f"{file_path}/Videos")
#Photo
if not os.path.exists(f"{file_path}/Photos"):
    os.mkdir(f"{file_path}/Photos")
#Docs
if not os.path.exists(f"{file_path}/Documents"):
    os.mkdir(f"{file_path}/Documents")
#Audio
if not os.path.exists(f"{file_path}/Audio"):
    os.mkdir(f"{file_path}/Audio")
#Other files
if not os.path.exists(f"{file_path}/Other"):
    os.mkdir(f"{file_path}/Other")

#Get file names
file_name = os.listdir(f"{file_path}/")

for file in file_name:
    #Get extension for each file
    file_ext = os.path.splitext(file)
    #Move file according to extension
    if file_ext[1] in ext_movie:
        os.rename(f"{file_path}/{file}", f"{file_path_video}/{file}")
        print(file_ext)
    elif file_ext[1] in ext_photo:
        os.rename(f"{file_path}/{file}", f"{file_path_photo}/{file}")
        print(file_ext)
    elif file_ext[1] in ext_document:
        os.rename(f"{file_path}/{file}", f"{file_path_document}/{file}")
        print(file_ext)
    elif file_ext[1] in ext_audio:
        os.rename(f"{file_path}/{file}", f"{file_path_audio}/{file}")
        print(file_ext)
    elif file_ext[1] != '':
        os.rename(f"{file_path}/{file}", f"{file_path_other}/{file}")
        print(file_ext)
