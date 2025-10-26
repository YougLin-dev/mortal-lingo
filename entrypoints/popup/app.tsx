import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { orpc } from "@/lib/orpc/client";

function App() {
  const { data: hello, isPending } = useQuery(orpc.hello.queryOptions());
  const [userId, setUserId] = useState("123");

  const { data: user } = useQuery(
    orpc.getUser.queryOptions({ input: { id: userId } })
  );

  const updateMutation = useMutation(orpc.updateUser.mutationOptions());

  const deleteMutation = useMutation(orpc.deleteItem.mutationOptions());

  return (
    <>
      <h1>WXT + React</h1>
      <div className="flex w-72 flex-col gap-2">
        <Button disabled={isPending}>
          {hello ?? `${i18n.t("hello")} popup`}
        </Button>

        <div className="flex gap-2">
          <input
            className="border px-2"
            onChange={(e) => setUserId(e.target.value)}
            placeholder="User ID"
            value={userId}
          />
          <span>{user?.name}</span>
        </div>

        <Button
          onClick={() => updateMutation.mutate({ id: userId, name: "Updated" })}
        >
          Update User {updateMutation.isPending && "..."}
        </Button>

        <Button onClick={() => deleteMutation.mutate({ id: "item-1" })}>
          Delete Item {deleteMutation.isPending && "..."}
        </Button>
      </div>
    </>
  );
}

export default App;
