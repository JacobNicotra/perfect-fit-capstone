import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect, useParams } from 'react-router-dom';


import { getPuzzles } from '../../store/puzzle';

// import AddServerModal from '../AddServerModal';
import './PuzzlePage.css'
import logo from '../../logo-black.png'
import logoBW from '../../logo-black.png'

// import Intro from '../Intro';


const Puzzle = () => {
  const dispatch = useDispatch();
  const params = useParams();
  // const serverId = params.serverId
  const [stepsEnabled, setStepsEnabled] = useState(true)
  const [initialStep, setInitalStep] = useState(0)
  const [pieceCount, setPieceCount] = useState(null);
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [location, setLocation] = useState(null);
  const [orderBy, setOrderBy] = useState(null);


  const [filteredPuzzles, setFilteredPuzzles] = useState(null);

  const user = useSelector(state => state.session.user);

  let puzzles = useSelector(state => {
    return state.puzzles.puzzleArray
  })


  useEffect(async () => {
    await dispatch(getPuzzles());
    // const newPersist = document.querySelector(`.server-${serverId}`);
    // const anotherPersist = document.querySelector('.current-chosen-server');
    // if (anotherPersist) anotherPersist.classList.remove('current-chosen-server');
    // if (newPersist) newPersist.classList.add('current-chosen-server');
    return
  }, [dispatch])

  // if (!user) {
  //     return <Redirect to='/' />;
  // }


  let pieceCountKey = [[0, 99], [100, 200], [201, 500], [501, 1000], [1001, 2000], [2001, 5000], [5001, 99999999]]


  const filter = (type, value) => {

    // return setFilteredPuzzles(puzzles.slice(0, 2))
    switch (type) {
      case 'pieceCount': {
        console.log(' MIN MIN MIN ', value, pieceCountKey[value][0], pieceCountKey[value][1])
        filteredPuzzles ? setFilteredPuzzles(filteredPuzzles.filter(puzzle =>
          puzzle.pieceCount < pieceCountKey[value][1] && puzzle.pieceCount > pieceCountKey[value][0]))
          :
          setFilteredPuzzles(puzzles.filter(puzzle =>
            puzzle.pieceCount < pieceCountKey[value][1] && puzzle.pieceCount > pieceCountKey[value][0]))
          }

    }


    console.log('category', category)
    console.log('location', location)
    console.log('difficulty', difficulty)
    console.log('pieceCount', pieceCount)
  }

  const updatePieceCount = (e) => {
    setPieceCount(e.target.value);
    filter('pieceCount', e.target.value)
  };
  const updateCategory = (e) => {
    setCategory(e.target.value);
    filter()
  };
  const updateDifficulty = (e) => {
    setDifficulty(e.target.value);
  };
  const updateLocation = (e) => {
    setLocation(e.target.value);
    filter()
  };
  const updateOrderBy = (e) => {
    setOrderBy(e.target.value);
    filter()
  };
  if (puzzles) {
    return (



      <div className='puz-page-holder'>

        <ul className='puz-filter-ul'>
          <li className='li-nostyle'>
            <div className='LabelAndInputContainer'>
              {/* <label className="puzzle-form-label">Number of Pieces</label> */}
              <select name="category" id="category-select" className="puzzle-form-input puz-form-sel puz-filter" id='difficulty-input'

                onChange={updateCategory}
                value={category}
              >

                <option value="">Category</option>
                <option value={1}>Movies</option>
                <option value={2}>Nature</option>
                <option value={3}>Architecture</option>
                <option value={4}>Landmarks</option>
                <option value={5}>History</option>
                <option value={6}>Fantasy</option>
                <option value={7}>Animals</option>
                <option value={8}>Kids</option>
                <option value={9}>Art</option>
                <option value={10}>Religious</option>
                <option value={11}>Food</option>
                <option value={12}>Comedy</option>
                <option value={13}>Holidays</option>
                <option value={14}>Celebrities</option>
                <option value={15}>Sport</option>
                <option value={16}>Space</option>
                <option value={17}>Technology</option>
                <option value={18}>Cars</option>
                <option value={19}>Miscellaneous</option>
              </select>
            </div>
          </li>
          <li className='li-nostyle'>
            <div className='LabelAndInputContainer'>
              {/* <label className="puzzle-form-label">Number of Pieces</label> */}
              <select name="category" id="category-select" className="puzzle-form-input puz-form-sel puz-filter" id='difficulty-input'

                onChange={updateLocation}
                value={location}
              >

                <option value="">Location</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
                <option value='expert'>Expert</option>

              </select>
            </div>
          </li>
          <li className='li-nostyle'>
            <div className='LabelAndInputContainer'>
              {/* <label className="puzzle-form-label">Number of Pieces</label> */}
              <select name="category" id="category-select" className="puzzle-form-input puz-form-sel puz-filter" id='difficulty-input'

                onChange={updateDifficulty}
                value={difficulty}
              >

                <option value="">Difficulty level</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
                <option value='expert'>Expert</option>

              </select>
            </div>
          </li>
          <li className='li-nostyle'>
            <div className='LabelAndInputContainer'>
              {/* <label className="puzzle-form-label">Number of Pieces</label> */}
              <select name="category" id="category-select" className="puzzle-form-input puz-form-sel puz-filter" id='difficulty-input'

                onChange={updatePieceCount}
                value={pieceCount}
              >
                <option value="">Piece Count</option>
                <option value={0}> - 99</option>
                <option value={1}>100 - 200</option>
                <option value={2}>201 - 500</option>
                <option value={3}>501 - 1000</option>
                <option value={4}>1001 - 2000</option>
                <option value={5}>2001 - 5000</option>
                <option value={6}>5000+</option>
              </select>
            </div>
          </li>
          <li className='li-nostyle'>
            <div className='LabelAndInputContainer'>
              {/* <label className="puzzle-form-label">Number of Pieces</label> */}
              <select name="category" id="category-select" className="puzzle-form-input puz-form-sel puz-filter" id='difficulty-input'

                onChange={updateOrderBy}
                value={orderBy}
              >

                <option value="">Order By</option>
                <option value='easy'>Newest</option>
                <option value='medium'>Oldest</option>

              </select>
            </div>
          </li>

        </ul>
        <div className='latest'>Latest Puzzles</div>
        <ul id="puzzle-cards">
          {filteredPuzzles ?

            filteredPuzzles.map(puzzle => {
              let color
              if (puzzle.image !== 'none') {
                color = 'transparent'
              } else {
                color = 'white'
              }
              return (
                <li key={puzzle.id} className='puzzle-card-wrapper' id={`puzzle-${puzzle.id}`}>
                  <div className={puzzle.image ? 'puzzle-card' : 'puzzle-card puzzle-card-background'}>
                    <span className='puzzle-card-title'>{puzzle.title}</span>
                    <span className='puzzle-card-rating'></span>
                    <NavLink to={`/puzzles/${puzzle.id}`}>
                      <img className={puzzle.image ? 'puzzle-card-image' : 'puzzle-card-logo'} src={puzzle.image ? puzzle.image : logoBW} alt='Puzzle Thumbnail'></img>
                    </NavLink>


                  </div>

                </li >
              )
            })
            :
            puzzles.map(puzzle => {
              let color
              if (puzzle.image !== 'none') {
                color = 'transparent'
              } else {
                color = 'white'
              }
              return (
                <li key={puzzle.id} className='puzzle-card-wrapper' id={`puzzle-${puzzle.id}`}>
                  <div className={puzzle.image ? 'puzzle-card' : 'puzzle-card puzzle-card-background'}>
                    <span className='puzzle-card-title'>{puzzle.title}</span>
                    <span className='puzzle-card-rating'></span>
                    <NavLink to={`/puzzles/${puzzle.id}`}>
                      <img className={puzzle.image ? 'puzzle-card-image' : 'puzzle-card-logo'} src={puzzle.image ? puzzle.image : logoBW} alt='Puzzle Thumbnail'></img>
                    </NavLink>


                  </div>

                </li >
              )
            })

          }
        </ul >
      </div >



    )
  }
  return (<div className="loader"></div>
  )
}

export default Puzzle;
