import { InfoContainer, InfoTag, InfoNameContainer } from "styles/contents/bodySection/public.style";
import { P2PInfo } from "styles/contents/bodySection/P2P.style";
import { IProducts } from "utils/interface/products";
const renderP2PCard = (product: IProducts) => {
  return (
    <>
      <InfoTag>{product?.tag}</InfoTag>
      <InfoContainer>
        <InfoNameContainer>
          <h3>{product?.title}</h3>
        </InfoNameContainer>
        <P2PInfo>
          <span>
            <svg>
              <g fill="#68696B">
                <path d="M4.55.684c2.499 0 3.85.849 3.85 1.198S7.049 3.079 4.55 3.079.7 2.231.7 1.882C.7 1.532 2.051.684 4.55.684Zm0-.684C2.037 0 0 .842 0 1.882s2.037 1.881 4.55 1.881S9.1 2.922 9.1 1.882 7.063 0 4.55 0ZM9.1 4.29c.793 0 1.569.23 2.229.66a3.941 3.941 0 0 1 1.477 1.76c.304.716.383 1.505.228 2.265a3.893 3.893 0 0 1-1.098 2.008 4.04 4.04 0 0 1-2.053 1.073 4.098 4.098 0 0 1-2.318-.223 3.993 3.993 0 0 1-1.8-1.444A3.858 3.858 0 0 1 5.09 8.21a3.883 3.883 0 0 1 1.177-2.77A4.065 4.065 0 0 1 9.1 4.29Zm0-.87c-.969 0-1.916.282-2.722.808a4.815 4.815 0 0 0-1.805 2.15 4.69 4.69 0 0 0-.279 2.767c.19.929.656 1.782 1.341 2.452a4.935 4.935 0 0 0 2.51 1.31c.95.186 1.935.09 2.83-.272a4.878 4.878 0 0 0 2.2-1.764A4.713 4.713 0 0 0 14 8.211c0-1.27-.516-2.49-1.435-3.387A4.958 4.958 0 0 0 9.1 3.42Z" />
                <path d="M9.485 10.386v.685h-.847v-.685h-.7a.708.708 0 0 1-.495-.2.676.676 0 0 1-.205-.484V8.84h.812v.739c0 .03.012.058.033.08a.12.12 0 0 0 .08.036h1.89a.12.12 0 0 0 .079-.036.115.115 0 0 0 .032-.08V8.491a.109.109 0 0 0-.035-.073.113.113 0 0 0-.077-.03h-2.1a.708.708 0 0 1-.495-.2.676.676 0 0 1-.205-.484v-1.21c0-.182.074-.356.205-.485.132-.128.31-.2.495-.2h.7v-.472H9.5v.486h.721c.186 0 .364.072.495.2a.677.677 0 0 1 .205.484v.753h-.819v-.603a.109.109 0 0 0-.035-.073.113.113 0 0 0-.077-.03H8.155a.107.107 0 0 0-.079.028.103.103 0 0 0-.033.075v.924a.108.108 0 0 0 .035.073c.021.02.049.03.077.03h2.1c.186 0 .364.072.495.2a.677.677 0 0 1 .205.484v1.368a.677.677 0 0 1-.205.484.709.709 0 0 1-.495.2l-.77-.034Z"></path>
                <path d="M4.9 10.66h-.343C2.023 10.674.7 9.86.7 9.579v-.684a8.636 8.636 0 0 0 3.724.773 3.692 3.692 0 0 1-.161-.684A6.754 6.754 0 0 1 .7 8.06V6.842a8.563 8.563 0 0 0 3.549.773 4.4 4.4 0 0 1 .14-.684A6.877 6.877 0 0 1 .7 6.007V4.79a8.803 8.803 0 0 0 3.85.753h.497a4.23 4.23 0 0 1 .63-.753c-.357.035-.7.062-1.127.062A7.001 7.001 0 0 1 .7 3.955V1.779C.7 1.499 2.023.684 4.55.684S8.4 1.498 8.4 1.78v1.704c.231-.038.465-.059.7-.062V1.78C9.1.794 7.063 0 4.55 0S0 .794 0 1.779v7.8c0 .978 2.037 1.779 4.55 1.779.28 0 .56 0 .826-.034a4.497 4.497 0 0 1-.476-.664Z"></path>
              </g>
            </svg>
            {product?.option?.benefit}%
          </span>
          <span>
            <svg>
              <g fill="#68696B">
                <path d="m.61 4.55.44-.77.441.77H.61Z"></path>
                <path d="m1.05 3.08-.525.91L0 4.9h2.1l-.525-.91-.525-.91Z"></path>
                <path d="M5.25 0a4.543 4.543 0 0 0-4.088 2.569l.413.7v.042A3.836 3.836 0 1 1 1.4 4.55a2.85 2.85 0 0 1 0-.35H.7a2.933 2.933 0 0 0 0 .35A4.55 4.55 0 1 0 5.25 0Z"></path>
                <path d="M13.3 2.8v.7a1.4 1.4 0 1 1-2.8 0v-.7H9.45a4.55 4.55 0 0 1 0 3.5H14V2.8h-.7Z"></path>
                <path d="M12.6 2.1a.7.7 0 1 0-1.4 0v1.4a.7.7 0 1 0 1.4 0V2.1ZM13.3 5.6v7.7H3.5V8.75A4.55 4.55 0 0 0 9.674 5.6H13.3Zm.7-.7H9.1a3.843 3.843 0 0 1-6.3 2.618V14H14V4.9ZM6.765 2.106l-1.863 2.09.523.466 1.863-2.09-.523-.466Z"></path>
                <path d="M5.6 4.2h-.7V7h.7V4.2Z"></path>
              </g>
            </svg>
            {product?.option?.duration}개월
          </span>
        </P2PInfo>
      </InfoContainer>
    </>
  );
};

export default renderP2PCard;
