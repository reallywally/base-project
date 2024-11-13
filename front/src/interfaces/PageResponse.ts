export interface PageResponse<T> {
  totalCount: number;
  prevPage: number;
  nextPage: number;
  totalPage: number;
  current: number;

  prev: boolean;
  next: boolean;

  pageNumList: [number];

  dtoList: [T];
}
