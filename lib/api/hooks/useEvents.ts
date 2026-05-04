import { useQuery } from '@tanstack/react-query';
import apiClient from '../client';
import endpoints from '../endpoints';
import { events as staticEvents } from '@/lib/events';
import type { TheatreEvent } from '@/lib/events';
import type { ApiResponse } from '../types';

const isApiEnabled = () => Boolean(process.env.NEXT_PUBLIC_API_URL);

async function fetchEvents(): Promise<TheatreEvent[]> {
  if (!isApiEnabled()) return staticEvents;
  const { data } = await apiClient.get<ApiResponse<TheatreEvent[]>>(endpoints.events);
  return data.data;
}

async function fetchEvent(id: string): Promise<TheatreEvent | undefined> {
  if (!isApiEnabled()) return staticEvents.find((e) => e.id === id);
  const { data } = await apiClient.get<ApiResponse<TheatreEvent>>(endpoints.event(id));
  return data.data;
}

export function useEvents() {
  return useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
    staleTime: 5 * 60 * 1000,
    placeholderData: staticEvents,
  });
}

export function useEvent(id: string) {
  return useQuery({
    queryKey: ['events', id],
    queryFn: () => fetchEvent(id),
    staleTime: 5 * 60 * 1000,
  });
}
