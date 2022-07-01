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

const Categories = () => {
  return (
    <CategoriesContainer>
      <Tabs>
        <CategoriesRow>
          <CategoriesColumn>
            <StyledSmTitle center>LAptops</StyledSmTitle>
            <StyledLgTitle center>Featured Categories</StyledLgTitle>
          </CategoriesColumn>
          <Divider sm />
          <TabList>
            <Tab>MOBILES</Tab>
            <Tab>laptops</Tab>
            <Tab>Play stations</Tab>
            <Tab>Ipads</Tab>
            <Tab>Screens</Tab>
            <Tab>Airpods</Tab>
          </TabList>
        </CategoriesRow>
        <Divider lg />
        <TabPanel>
          <CenterContent>
            <CategoriesRow fw>
              <CategoriesBox>
                <CategoriesGrid>
                  <CategoriesProductItem />
                  <CategoriesProductItem />
                  <CategoriesProductItem />
                  <CategoriesProductItem />
                </CategoriesGrid>
              </CategoriesBox>
              <CategoriesBox>
                <SingleSlider />
              </CategoriesBox>
            </CategoriesRow>
            <ButtonViewMore m="70px 0 0 0">View More Laptops</ButtonViewMore>
          </CenterContent>
        </TabPanel>
      </Tabs>
    </CategoriesContainer>
  );
};

export default Categories;
