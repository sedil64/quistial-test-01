export type Show = {
  show: {
    id: number;
    url_image: string;
    name: string;
    genres?: string[];
    rating?: { average: number | null };
    image?: {
      medium?: string;
    };
  };
};
