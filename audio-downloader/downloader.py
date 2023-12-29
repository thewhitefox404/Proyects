from pytube import Playlist
import os

def downloader(link):
    playlist = Playlist(link)
    print(f'\n\nNúmero de videos en la lista de reproducción: {len(playlist.video_urls)}\n\n')

    for video in playlist.videos:
        audio = video.streams.filter(only_audio=True).first()
        archivo_descargado = audio.download(output_path=path)
        nombre_mp3 = os.path.splitext(archivo_descargado)[0] + '.mp3'
        os.rename(archivo_descargado, nombre_mp3)
        print(f'Canción {video.title} descargada.')
path = "/media/thewhitefox/Musica/"


while True:
    link = input("Ingrese el link de la playlist: ")
    downloader(link)
    continuar = input("¿Desea descargar otra playlist? (s/n): ")
    if continuar.lower() != "s":
        break   