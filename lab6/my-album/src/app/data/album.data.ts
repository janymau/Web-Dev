import { AlbumModel } from "../model/album-model";

export const albumsDATA: AlbumModel[] = [
  {
    albumName: "Big Cats",
    albumId: 1,
    albumPhotoURL: "https://zoographia.ru/upload/iblock/863/2siomnx2kbxkno04uaxezlrt105fosn2.jpg",
    albumItems: [
      {
        name: "Lion",
        id: 101,
        photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQum62NWJbpa3uqr6ozh7yZxE_sM2prsZCsVg&s",
        description: "The lion is known as the king of the jungle."
      },
      {
        name: "Tiger",
        id: 102,
        photoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1200px-Walking_tiger_female.jpg",
        description: "Tigers are the largest wild cats in the world."
      },
      {
        name: "Leopard",
        id: 103,
        photoURL: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Namibie_Etosha_Leopard_01edit.jpg",
        description: "Leopards are solitary and highly adaptable big cats."
      }
    ]
  },
  {
    albumName: "Birds of Prey",
    albumId: 2,
    albumPhotoURL: "https://upload.wikimedia.org/wikipedia/commons/d/df/Birds_of_Prey_Diversity.jpg",
    albumItems: [
      {
        name: "Eagle",
        id: 201,
        photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmjamsfdHet_hSpCTGZ9lRQvnzkDohT3j6Q&s",
        description: "Eagles are powerful birds with excellent eyesight."
      },
      {
        name: "Owl",
        id: 202,
        photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8V1hJOgZNWmy8TVGL3MHNOMh4V86M7Fflg&s",
        description: "Owls are nocturnal birds known for their silent flight."
      },
      {
        name: "Falcon",
        id: 203,
        photoURL: "https://th-thumbnailer.cdn-si-edu.com/u05sGsmgjEu42tw7ADrw0eoliEk=/fit-in/1200x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d7/5d/d75da9a8-8bbb-4657-8ba1-f4423e964477/istock-172384962.jpg",
        description: "Falcons are the fastest birds, capable of high-speed dives."
      }
    ]
  },
  {
    albumName: "Reptiles",
    albumId: 3,
    albumPhotoURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Lizard_Collage.jpg/220px-Lizard_Collage.jpg",
    albumItems: [
      {
        name: "Crocodile",
        id: 301,
        photoURL: "https://cdn.britannica.com/84/198884-050-A37B8971/crocodile-Nile-swath-one-sub-Saharan-Africa-Madagascar.jpg",
        description: "Crocodiles are large, carnivorous reptiles living in rivers."
      },
      {
        name: "Python",
        id: 302,
        photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2QN8iXQnMCPYaAy8d3lp1kLc_rzYg8X1Hw&s",
        description: "Pythons are non-venomous snakes that constrict their prey."
      },
      {
        name: "Iguana",
        id: 303,
        photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicb2UdqTz_xe_0RZ-ffOmFCn1LopQnhG4Bg&s",
        description: "Iguanas are herbivorous lizards often found in tropical areas."
      }
    ]
  },
  {
    albumName: "Aquatic Life",
    albumId: 4,
    albumPhotoURL: "https://blog.itrip.net/wp-content/uploads/2013/03/best-aquariums-sea-life-encounter.jpg",
    albumItems: [
      {
        name: "Dolphin",
        id: 401,
        photoURL: "https://cdn.sanity.io/images/esqfj3od/production/7e16007f7cc9917ad1bc9c83cc039cdcbd93206e-563x375.webp?w=1200&q=65&fit=clip&auto=format",
        description: "Dolphins are intelligent and social marine mammals."
      },
      {
        name: "Shark",
        id: 402,
        photoURL: "https://cdn.britannica.com/79/65379-050-5CF52BAC/Shortfin-mako-shark-seas.jpg",
        description: "Sharks are apex predators with keen senses."
      },
      {
        name: "Sea Turtle",
        id: 403,
        photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvmUX9RrU4tLzyR-NQ89HqWXGxKBf5t6p5rw&s",
        description: "Sea turtles are ancient reptiles adapted to marine life."
      }
    ]
  }
];
