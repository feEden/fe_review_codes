import { createContext } from 'react';

import { Injected } from '../interface'

export const context = createContext<Injected>({} as Injected);