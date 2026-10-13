export const UseEffectPage = () => {
  return (
    <div className='container'>
      <div className='row'>
        <section className='col-12 mt-3'>
          <h3>
            API de{' '}
            <span className='badge text-bg-dark text-info'>useState</span>
          </h3>
          <article>
            <div className='alert alert-secondary'>
              <pre className='m-0 text-body'>
                const [state, setState] = useState(initialState);
              </pre>
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}
