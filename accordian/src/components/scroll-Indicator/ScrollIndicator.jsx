import { useEffect, useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollpercentage, setScrollPercentage] = useState(0);

  const fetchProducts = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const handleScrollPercentage = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  console.log(scrollpercentage);
  useEffect(() => {
    fetchProducts(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if(loading){
    return <div>loading ....</div>
  }
  if(errorMessage){
    return <div>Error occur</div>
  }

  return (
    <div className="scroll-container justify-center text-center">
      <div className="top-container">
        <h1 className="font-bold text-2xl text-white mb-5 mt-6">
          Custom Scroll Indicator
        </h1>
        <div className="scroll-progress">
          <div
            className="progress-bar "
            style={{ width: `${scrollpercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-custom ">
        {data && data.length
          ? data.map((dataitem, index) => (
              <p key={index} className="mt-3">
                {dataitem.title}
              </p>
            ))
          : null}
      </div>
    </div>
  );
};
export default ScrollIndicator;
