import Layout from "../components/layout";

const Circle = (props: { width: number; height: number }) => {
  return (
    <div
      className="border-primary-900 block
                  border-[20px] rounded-full
                  hover:border-[30px]
                  w-[200px] h-[200px]
                  hover:w-[260px] hover:h-[260px]
                  transition-all"
      // style={{
      //   width: props.width,
      //   height: props.height,
      //   "&:hover": { width: 1.2 * props.width, height: 1.2 * props.height },
      // }}
    ></div>
  );
};

export default function Index() {
  return (
    <>
      <div className="gap-1 h-screen grid grid-flow-col items-center justify-center">
        {[...Array(1)].map((i) => (
          <Circle width={200} height={200} />
        ))}
      </div>
    </>
  );
}
