import ProductList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetSimulationGamesQuery,
  useGetRpgGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()

  return (
    <>
      <ProductList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={sportGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductList
        games={fightGames}
        title="Luta"
        background="gray"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRPG}
      />
    </>
  )
}

export default Categories
