/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObservableEvent, ObservablePrimitiveChildFns } from "@legendapp/state";
import { ComponentProps } from "react";
import { z } from 'zod';

type OnValidation = {
    onValidation: ObservableEvent;
}
type FormValidation<T> = OnValidation & T;


type ButtonProps = {
    children: React.ReactNode;
} & ComponentProps<"button">

type InputProps<T extends string> = {
    id: T
    rule: z.ZodType;
    value$: FormValidation<Record<T, ObservablePrimitiveChildFns<any>>>;
} 
