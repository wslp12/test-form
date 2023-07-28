import Input from "./components/Input";
import Button from "./components/Button";
import { useObservable } from "@legendapp/state/react";
import { event } from "@legendapp/state";
import { z } from "zod";
import { FormValidation } from "./components";

const schema = z.object({
  name: z.string().min(3),
  id: z.string().min(3),
});

export type StateSchema = FormValidation<z.infer<typeof schema>>;

function App() {
  const state$ = useObservable<StateSchema>({
    id: "",
    name: "",
    onValidation: event(),
  });

  const handleClick = () => {
    const result = schema.safeParse(state$.get());
    if (!result.success) {
      state$.onValidation.fire();
      return;
    }
    // someApi(someValidValue)
  };

  console.count();

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-violet-800 w-2/3 h-2/4 rounded-md p-4 flex flex-col">
        <div className="text-white text-3xl flex flex-col items-center">
          로그인
        </div>
        <section>
          <span className="text-white">아이디: </span>
          <Input value$={state$} id="id" rule={schema.shape["id"]} />
        </section>
        <section>
          <span className="text-white">이름: </span>
          <Input value$={state$} id="name" rule={schema.shape["name"]} />
        </section>
        <Button onClick={handleClick}>저장</Button>
      </div>
    </div>
  );
}

export default App;
