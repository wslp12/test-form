import Input from "./components/Input";
import Button from "./components/Button";
import { useRef } from "react";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = z.object({
  id: z.string().min(3),
  name: z.string().min(3),
});

type Schema = z.infer<typeof schema>;

function App() {
  const state = useRef({ id: "", name: "" } as Schema);

  const handleClick = () => {
    const result = schema.safeParse(state.current);
    if (!result.success) {
      toast.error("필수 폼 항목을 입력해주세요");
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
          <Input
            value={state.current.id}
            onChange={(value: string) => (state.current.id = value)}
            rule={schema.shape["id"]}
          />
        </section>
        <section>
          <span className="text-white">이름: </span>
          <Input
            value={state.current.name}
            onChange={(value: string) => (state.current.name = value)}
            rule={schema.shape["name"]}
          />
        </section>
        <Button onClick={handleClick}>저장</Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
