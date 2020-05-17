import React from 'react';

const MobilesContext = React.createContext([]);

export const MobilesProvider = MobilesContext.Provider;
export const MobilesConsumer = MobilesContext.Consumer;

export default MobilesContext;
