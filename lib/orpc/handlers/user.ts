export const userHandlers = {
  getUser: ({ input }: { input: { id: string } }) => ({
    id: input.id,
    name: `User ${input.id}`,
    age: 20,
  }),

  updateUser: ({ input }: { input: { id: string; name: string } }) => ({
    success: true,
    updated: input,
  }),
};
