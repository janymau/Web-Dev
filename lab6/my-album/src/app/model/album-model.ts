export interface AlbumModel{
    albumName: string;
    albumId: number;
    albumPhotoURL: string;
    albumItems: AlbumItem[];
}
export interface AlbumItem{
    name: string;
    id: number;
    photoURL: string;
    description: string;                                        
}