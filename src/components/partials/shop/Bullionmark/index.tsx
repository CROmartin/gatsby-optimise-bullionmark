import React, { Suspense, lazy, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Seo from "@/components/common/Seo";
import {
  setBmkShopPageSections,
  setConfigDetails,
} from "@/redux/reducers/homepageReducer";
const BannerSlider = lazy(
  () => import("../../landing-page/Bullionmark/BannerSlider")
);
import { Skeleton, useMediaQuery } from "@mui/material";
import useUserDetailsFromToken from "@/hooks/useUserDetailsFromToken";
import RenderOnViewportEntry from "@/components/common/RenderOnViewportEntry";
import Loader from "@/components/common/Loader";
const Toaster = lazy(() => import("@/components/common/Toaster"));
const BestCategorySlider = lazy(() => import("./BestCategorySlider"));

// IT IS CAUSING CACHING ERROR
// const BmkFeaturedProductsSlider = lazy(
//   () => import("./BmkFeaturedProductsSlider")
// );

import { ENDPOINTS } from "@/utils/constants";
import axiosInstance from "@/axiosfolder";
// import Layout from "@/components/common/Layout";
import BullionmarkHeader from "@/components/header/BullionmarkHeader";
const LazyBullionmarkFooter = lazy(
  () => import("@/components/footer/BullionmarkFooter")
);

const ThreePicsRow = lazy(() => import("./ThreePicsRow"));
const OneBigPicAndContent = lazy(() => import("./OneBigPicAndContent"));
const BmkPopularProductSlider = lazy(() => import("./BmkPopularProductSlider"));
const ExclusiveJourneys = lazy(
  () => import("../../landing-page/Bullionmark/ExclusiveJourneys")
);
const InspiringStories = lazy(
  () => import("../../landing-page/Bullionmark/InspiringStories")
);
const BullionmarkShop = (props: any) => {
  const { serverData } = props;
  const dispatch = useAppDispatch();
  const {
    configDetails: configDetailsState,
    openToaster,
    loading,
    bmkShopPageSections,
  } = useAppSelector((state) => state.homePage);

  useEffect(() => {
    dispatch(setConfigDetails(serverData?.configDetails));
    dispatch(setBmkShopPageSections(serverData?.bmkShopPageSections));
  }, [serverData]);

  useUserDetailsFromToken();
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  const keyWords = useMemo(() => {
    return (
      configDetailsState?.Store_ShopPage_Meta_Keywords?.value?.split(",") || []
    );
  }, [configDetailsState]);
  return (
    <>
      <Loader open={loading} />
      {/* <Layout isItMainPage={true}> */}
      <>
        <Seo
          keywords={[
            "gatsby",
            "tailwind",
            "react",
            "tailwindcss",
            "Travel",
            "Qmit",
            "gold",
            "metal",
            ...keyWords,
          ]}
          lang="en"
          isItShopPage={true}
          description={
            configDetailsState?.Store_ShopPage_Meta_Description?.value
          }
        />
        <BullionmarkHeader />

        {!isMobile &&
          configDetailsState?.Sliders_ShopHomepage_Enable?.value == true && (
            <Suspense fallback={<Skeleton height={"500px"}></Skeleton>}>
              <BannerSlider isItShopPage={true} />
            </Suspense>
          )}
        <Skeleton height={"1000px"}></Skeleton>

        <RenderOnViewportEntry
          rootMargin="200px"
          threshold={0.25}
          minHeight={900}
          skeletonMargin={-220}
        >
          <BestCategorySlider
            pageData={bmkShopPageSections}
            PaddingClass={
              !isMobile &&
              configDetailsState?.Sliders_ShopHomepage_Enable?.value
                ? ""
                : "TopBannerAbsent"
            }
            title={
              configDetailsState?.[
                "ShopHomepage_Section_1_Featured_Categories_Title"
              ]?.value
            }
          />
        </RenderOnViewportEntry>
        {/* <RenderOnViewportEntry
          rootMargin="200px"
          threshold={0.25}
          minHeight={950}
          skeletonMargin={-220}
        >
          <BmkFeaturedProductsSlider
            title={
              configDetailsState?.[
                "ShopHomepage_Section_2_Featured_Products_Title"
              ]?.value
            }
            description={
              configDetailsState?.[
                "ShopHomepage_Section_2_Featured_Products_Subtitle"
              ]?.value
            }
            needToCallProductAPI={false}
            productData={serverData?.productData}
            // priceForEachId={serverData?.priceForEachId}
          />
        </RenderOnViewportEntry> */}
        <RenderOnViewportEntry
          rootMargin="200px"
          threshold={0.25}
          minHeight={600}
        >
          <ThreePicsRow />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry
          rootMargin="200px"
          threshold={0.25}
          minHeight={550}
        >
          <OneBigPicAndContent />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry
          rootMargin="200px"
          threshold={0.25}
          minHeight={750}
        >
          <BmkPopularProductSlider
            title={
              configDetailsState?.[
                "ShopHomepage_Section_5_Popular_Products_Title"
              ]?.value
            }
            description={
              configDetailsState?.[
                "ShopHomepage_Section_5_Popular_Products_Subtitle"
              ]?.value
            }
          />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry
          rootMargin="200px"
          threshold={0.25}
          minHeight={800}
        >
          <ExclusiveJourneys
            data={
              bmkShopPageSections?.shopHomepage_Section_6_Two_pics_and_content
            }
          />
        </RenderOnViewportEntry>
        <RenderOnViewportEntry
          rootMargin="200px"
          threshold={0.25}
          minHeight={800}
        >
          <InspiringStories
            title={
              configDetailsState?.[
                "ShopHomepage_Section_7_Two_pics_in_a_rows_Title"
              ]?.value
            }
            data={
              bmkShopPageSections?.shopHomepage_Section_7_Two_pics_in_a_rows
            }
            className="ShopInspiringStories"
          />
        </RenderOnViewportEntry>
        {openToaster && (
          <Suspense fallback={<></>}>
            <Toaster />
          </Suspense>
        )}
        <RenderOnViewportEntry
          rootMargin="200px"
          threshold={0.25}
          minHeight={800}
        >
          <LazyBullionmarkFooter />
        </RenderOnViewportEntry>
      </>
    </>
  );
};
// Implement getServerData for BullionmarkShop
BullionmarkShop.getServerData = async (context: any) => {
  try {
    console.log("getServerData -- starting", Date.now());

    const dataforbody = {
      search: "",
      pageNo: 0,
      pageSize: -1,
      sortBy: "",
      sortOrder: "",
      filters: {
        isFeatureProduct: true,
      },
    };

    console.log("getServerData -- before fetching data", Date.now());
    const [
      configDetailsResponse,
      bmkShopPageSectionsResponse,
      productResponse,
    ] = await Promise.all([
      axiosInstance.get(ENDPOINTS.getConfigStore),
      axiosInstance.get(ENDPOINTS.bullionMarkShopSections),
      axiosInstance.post(ENDPOINTS.getProduct, dataforbody),
    ]);

    const configDetails = configDetailsResponse.data.data;
    const bmkShopPageSections = bmkShopPageSectionsResponse.data.data;
    const productData = productResponse.data;

    // let priceForEachId = null;

    // if (productData?.data?.items?.length > 0) {
    //     const ids = productData.data.items.map((product:any) => product.productId);
    //     const priceResponse = await axiosInstance.post(ENDPOINTS.productPrices, { productIds: ids });
    //     const priceData = priceResponse.data;

    //     priceForEachId = {};
    //     priceData?.data?.forEach((product:any) => {
    //         priceForEachId[product.productId] = product;
    //     });
    // }

    console.log("getServerData -- before returning props", Date.now());

    return {
      props: {
        configDetails,
        bmkShopPageSections,
        productData: productData.data,
        // priceForEachId,
      },
    };
  } catch (error) {
    console.error("🚀 ~ getServerData ~ error:", error);
    console.log("getServerData -- inside catch block", Date.now());
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
};

export default BullionmarkShop;
