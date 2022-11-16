export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

export function CreateAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function CreateAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function CreateAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
// export const CreateAction = (typeName,payloadName) => ({type: typeName, payload:payloadName})
