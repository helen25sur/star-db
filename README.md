## Scheme of this app


    <App>
      <Header />
      <RandomPlanet />

      <PeoplePage>
        <ItemList /> <PersonDetail />
      </PeoplePage>

      <PlanetPage>
        <ItemList /> <PlanetDetail />
      </PlanetPage>

      <StarshipPage>
        <ItemList /> <StarshipDetail />
      </StarshipPage>

    </Root>


## Lifecycle hooks

## MOUNTING
------

    constructor() => render() => componentDidMount()

## UPDATES
-------
    New Props

              => render() => componentDidUpdate(prevProps, prevState)

    setState()


## UNMOUNTING
----------

    componentWillUnmount()



## ERRORS
------

    componentDidCatch()

