import {HEADLINE_API_URL} from '../constants/config';

export type Article = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: Date;
  content: string | null;
};

export type Response = {
  status: string;
  totalResults: number;
  articles: Article[];
};

type Params = {
  source?: string;
  category: string;
};
export const getHeadlines = async (params: Params): Promise<Response> => {
  const response = await fetch(
    `${HEADLINE_API_URL}&source=${params.source}&category=${encodeURIComponent(
      params.category,
    )}`,
    {
      method: 'GET',
    },
  );

  const data = (await response.json()) as Response;
  return data;
};
