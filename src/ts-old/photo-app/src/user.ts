import Album from "./album";

export default class User {
    private album: Album[];
  
    constructor(
      private id: number,
      private username: string,
      private firstName: string,
      private isPro: boolean
    ) {
      this.album = [];
    }
  
    addAlbum(album: Album) {
      this.album.push(album);
    }

    removeAlbum(album: Album){
        const index = this.album.indexOf(album);
        if(~index){
            this.album.splice(index, 1);
        }
    }
  }