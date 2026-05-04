import { useQuery } from '@tanstack/react-query';
import apiClient from '../client';
import endpoints from '../endpoints';
import { shows as staticShows } from '@/lib/shows';
import type { Show } from '@/lib/shows';
import type { ApiResponse } from '../types';

const isApiEnabled = () => Boolean(process.env.NEXT_PUBLIC_API_URL);

async function fetchShows(): Promise<Show[]> {
  if (!isApiEnabled()) return staticShows;
  const { data } = await apiClient.get<ApiResponse<Show[]>>(endpoints.shows);
  return data.data;
}

async function fetchShow(id: string): Promise<Show | undefined> {
  if (!isApiEnabled()) return staticShows.find((s) => s.id === id);
  const { data } = await apiClient.get<ApiResponse<Show>>(endpoints.show(id));
  return data.data;
}

export function useShows() {
  return useQuery({
    queryKey: ['shows'],
    queryFn: fetchShows,
    staleTime: 5 * 60 * 1000,
    placeholderData: staticShows,
  });
}

export function useShow(id: string) {
  return useQuery({
    queryKey: ['shows', id],
    queryFn: () => fetchShow(id),
    staleTime: 5 * 60 * 1000,
  });
}
