import React, { createContext, useContext } from 'react'

const ctx = createContext<any | undefined>(undefined)

export const useAddressContext = () => useContext(ctx)

export const AddressContextProvider: React.FC<any> = ({
  address,
  countries,
  rules,
  children,
}) => {
  return (
    <ctx.Provider value={{ address, countries, rules }}>
      {children}
    </ctx.Provider>
  )
}
