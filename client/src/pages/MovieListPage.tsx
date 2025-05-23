import { useCallback, useEffect, useState } from "react";
import MovieList from "../components/movies/MovieList";
import { useGetMoviesQuery } from "../features/movies/movieApi";
import PageContent from "../PageContent";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Movie } from "@/types/Movie";

const MovieListPage = () => {
  const limit = 16;
  const isMobile = useIsMobile();

  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);

  const { data, error, isLoading, isFetching } = useGetMoviesQuery({
    page: page - 1,
    limit,
  });
  const totalCount = data?.totalCount || 0;

  const totalPages = Math.ceil(totalCount / limit);
  const hasMore = page < totalPages;

  useEffect(() => {
    if(!data) return;

    if (isMobile) {
      setMovies((prev) => [...prev, ...(data.movies || [])]);
    } else {
      setMovies(data.movies || []);
    }
  }, [data, isMobile]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const onPageChange = (pageNo: number) => {
    setPage(pageNo);
  };

  const loadMore = useCallback(() => {
    if (!isFetching && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [isFetching, hasMore]);

  if (isLoading && page == 1) return <p>Loading...</p>;
  if (error) return <p>Error loading movies</p>;

  return (
    <PageContent className="flex flex-col items-center justify-center mx-auto px-6 py-24 w-full">
      <MovieList
        movies={movies}
        totalPages={totalPages}
        page={page}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        onPageChange={onPageChange}
        hasMore={hasMore}
        loadMore={loadMore}
      />
    </PageContent>
  );
};

export default MovieListPage;
