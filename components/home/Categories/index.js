import {
  CategoriesContainer,
  CategoriesColumn,
  CategoriesRow,
  CategoriesBox,
  CategoriesGrid,
  CenterContent,
} from "./style";
import SingleSlider from "./SingleSlider";
import { StyledLgTitle, StyledSmTitle } from "../../shared/Title";
import CategoriesProductItem from "../../shared/CategoriesProductItem";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Divider } from "../../shared/Divider";
import { ButtonViewMore } from "../../shared/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  getFeaturedCategories,
  reset,
} from "../../../store/features/products/productsSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Categories = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { featuredCategories, allCategory, isError, isSuccess, message } =
    useSelector((state) => state.products);
  const [listData, setListData] = useState([]);
  const [listCategory, setListCategory] = useState([]);
  const [tabSelectedIndex, setTabSelectedIndex] = useState(0);

  useEffect(() => {
    if (featuredCategories) {
      setListData(featuredCategories.filter((item, index) => index !== 0));
    }
    if (allCategory) {
      setListCategory(allCategory.categories);
    }
  }, [featuredCategories, allCategory]);

  return (
    <CategoriesContainer>
      <Tabs onSelect={(index) => setTabSelectedIndex(index)}>
        <CategoriesRow>
          <CategoriesColumn>
            <StyledSmTitle center>LAptops</StyledSmTitle>
            <StyledLgTitle center>Featured Categories</StyledLgTitle>
          </CategoriesColumn>
          <Divider sm />
          <TabList>
            {listCategory &&
              listCategory.map((item) => (
                <Tab
                  key={item.name}
                  onClick={() => {
                    dispatch(getFeaturedCategories(item.name));
                    dispatch(reset());
                  }}
                >
                  {item.name}
                </Tab>
              ))}
          </TabList>
        </CategoriesRow>
        <Divider lg />
        {listCategory &&
          listCategory.map((item, index) =>
            index === tabSelectedIndex ? (
              <TabPanel key={item._id + "-" + index}>
                <CenterContent>
                  <CategoriesRow fw>
                    <CategoriesBox>
                      <CategoriesGrid>
                        {featuredCategories &&
                          listData.map((item) => (
                            <CategoriesProductItem
                              key={item._id}
                              productData={item}
                            />
                          ))}
                      </CategoriesGrid>
                    </CategoriesBox>
                    <CategoriesBox>
                      <SingleSlider />
                    </CategoriesBox>
                  </CategoriesRow>
                  <ButtonViewMore
                    m="70px 0 0 0"
                    onClick={() =>
                      router.push(
                        `/categories?category=${item.name}`,
                        undefined,
                        {
                          shallow: true,
                        }
                      )
                    }
                  >
                    View More
                    {/* {listCategory[0].name.toString().toLowerCase()} */}
                  </ButtonViewMore>
                </CenterContent>
              </TabPanel>
            ) : (
              <TabPanel key={item._id + "-" + index}></TabPanel>
            )
          )}
      </Tabs>
    </CategoriesContainer>
  );
};

export default Categories;
