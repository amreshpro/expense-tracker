import { create } from "zustand";

type Item = {
  id: number;
  title: string;
  amount: number;
};
type State = {
   history: Item[] 
};

type Actions = {
  addInHistory: (data: any) => void;
  removeInHistory: (id:any) => void;
};
const useHistoryStore = create<State & Actions>((set) => ({
  history: [],
    
  addInHistory: (item: any) => {
    set((state) => ({
        history:[item,...state.history,]
    }));
  },
  removeInHistory: (id:any) => {
     set((state) => ({
        history:state.history.filter((item)=>{if(item.id!==id) return item})
     }));

  },
}));

export default useHistoryStore;
