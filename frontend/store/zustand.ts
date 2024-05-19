import { create } from "zustand";

type DataStore = {
  loading: boolean;
  empty: boolean;
  timeline: TimelineType[];
  setEmpty: (empty: boolean) => void;
  setTimeline: (timeline: TimelineType[]) => void;
  setLoading: (loading: boolean) => void;
};

export const useTimelineStore = create<DataStore>((set) => ({
  loading: false,
  timeline: [],
  empty: true,
  setTimeline: (timeline) => set({ timeline }),
  setEmpty: (empty) => set({ empty }),
  setLoading: (loading) => set({ loading }),
}));
