import React from 'react';

const MobileContext = React.createContext({});

export const MobileProvider = MobileContext.Provider;
export const MobileConsumer = MobileContext.Consumer;

export default MobileContext;
