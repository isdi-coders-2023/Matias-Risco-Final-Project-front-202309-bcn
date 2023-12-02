import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => (
  <>
    <LoadingStyled className="loading">
      <img
        src="images/loading.svg"
        alt="loading"
        className="loading__image"
        width="250"
        height="250"
      />
      <h2>Loading...</h2>
    </LoadingStyled>
  </>
);

export default Loading;
