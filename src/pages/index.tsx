import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Caracteristicas from "../components/Caracteristicas";
import Header from "../components/Header";
import Separator from "../components/Separator";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Caracteristicas />
      <Separator />
    </Flex>
  )
}
