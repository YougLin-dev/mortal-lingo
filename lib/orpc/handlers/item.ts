export const itemHandlers = {
  deleteItem: ({ input }: { input: { id: string } }) => ({ deleted: input.id }),
};
