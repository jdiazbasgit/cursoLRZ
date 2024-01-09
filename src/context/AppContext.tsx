import { useMediaQuery } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";

import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PathName from "src/consts/pathName";

interface AppContextInterface {
  isCompactSlider: boolean;
  setIsCompactSlider: () => void;
}
const initialContext: AppContextInterface = {
  isCompactSlider: false,
  setIsCompactSlider() { },
}
const AppContext = createContext<AppContextInterface>(initialContext);

export function useAppContext() {
  return useContext(AppContext)
}

interface Props {
  children: JSX.Element[] | JSX.Element
}

export const notRedirectPathName = [PathName.home.base, PathName.home.form_ninja]

export function AppProvider({ children }: Props) {
  const [isLargerThan1280] = useMediaQuery('(max-width: 1280px)')
  const [isCompactSlider, setIsCompactSlider] = useState<boolean>(isLargerThan1280 ? true : false)

  const dispatch = useDispatch()
  const router = useRouter()
  const queryClient = useQueryClient()

  useEffect(() => {
    if (isLargerThan1280) return setIsCompactSlider(true)
    return setIsCompactSlider(false)
  }, [isLargerThan1280])


  const value: AppContextInterface = {
    isCompactSlider,
    setIsCompactSlider: () => setIsCompactSlider(e => !e)
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}