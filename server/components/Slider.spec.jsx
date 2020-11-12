import Slider from '../../src/components/Slider.js'

describe('Slider', () => {
  var slider

  beforeEach(function() {
    slider = renderIntoDocument(<Slider />)
  })

  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(Slider)).to.be.true
  })
})
