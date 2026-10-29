function SignupFormUI({
  activeTab,
  register,
  errors,
  onTabChange,
  onSubmit,
}) {
  const renderError = (fieldName) => {
    const error = errors[fieldName]?.message
    return error ? <span className="field-error">{error}</span> : null
  }

  return (
    <div className="auth-page">
      <div className="auth-wrapper">
        <header className="auth-header">
          <div className="brand" aria-label="Ezyourlife logo">
            <span className="brand-mark">◉</span>
            <span className="brand-text">EZYOURLIFE</span>
            <span className="brand-tag">THINK IT – DONE</span>
          </div>

          <button type="button" className="back-button">
            <span>←</span>
            Back to home
          </button>
        </header>

        <main className="auth-content">
          <aside className="promo-panel">
            <div className="promo-box">
              <h2>
                Your first <span>100</span>
                <br />
                credits are free
              </h2>

              <p>
                50 when you create your account and 50 more after your first
                run. No card needed.
              </p>

              <ul>
                <li>425+ business apps for bills, customers, staff and photos</li>
                <li>Pay only for results, packs from ₹10</li>
                <li>Websites and cards you make in minutes</li>
                <li>Your details are filled in for you in every app</li>
              </ul>
            </div>
          </aside>

          <section className="form-panel">
            <div className="panel-heading">
              <h1>Sign in</h1>
              <p>Welcome back. New here? Create a free account and get 100 credits.</p>
            </div>

            <div className="social-buttons">
              <button type="button" className="social-button google">
                <span className="icon">G</span>
                Continue with Google
              </button>
              <button type="button" className="social-button apple">
                <span className="icon"></span>
                Continue with Apple
              </button>
            </div>

            <div className="divider">
              <span>OR USE EMAIL</span>
            </div>

            <div className="tab-toggle" role="tablist" aria-label="Authentication mode">
              <button
                type="button"
                className={activeTab === 'signin' ? 'tab-button active' : 'tab-button'}
                onClick={() => onTabChange('signin')}
              >
                Sign In
              </button>
              <button
                type="button"
                className={activeTab === 'create' ? 'tab-button active' : 'tab-button'}
                onClick={() => onTabChange('create')}
              >
                Create account
              </button>
            </div>

            <form className="auth-form" onSubmit={onSubmit} noValidate>
              {activeTab === 'create' && (
                <>
                  <label className="field">
                    <span>Full name *</span>
                    <input
                      type="text"
                      {...register('fullName')}
                      placeholder="John Smith"
                      className={errors.fullName ? 'input-error' : ''}
                    />
                    {renderError('fullName')}
                  </label>

                  <label className="field">
                    <span>Email *</span>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="john@example.com"
                      className={errors.email ? 'input-error' : ''}
                    />
                    {renderError('email')}
                  </label>

                  <label className="field">
                    <span>Password *</span>
                    <input
                      type="password"
                      {...register('password')}
                      placeholder="••••••••"
                      className={errors.password ? 'input-error' : ''}
                    />
                    {renderError('password')}
                  </label>

                  <label className="field">
                    <span>Mobile number *</span>
                    <input
                      type="tel"
                      {...register('mobile')}
                      placeholder="9876543210"
                      className={errors.mobile ? 'input-error' : ''}
                    />
                    {renderError('mobile')}
                  </label>

                  <div className="split-fields">
                    <label className="field half-field">
                      <span>Business or school *</span>
                      <input
                        type="text"
                        {...register('businessSchool')}
                        placeholder="Sharma Sweets"
                        className={errors.businessSchool ? 'input-error' : ''}
                      />
                      {renderError('businessSchool')}
                    </label>

                    <label className="field half-field">
                      <span>Your role *</span>
                      <input
                        type="text"
                        {...register('role')}
                        placeholder="Owner"
                        className={errors.role ? 'input-error' : ''}
                      />
                      {renderError('role')}
                    </label>
                  </div>

                  <label className="field">
                    <span>Location *</span>
                    <input
                      type="text"
                      {...register('location')}
                      placeholder="Indore, India"
                      className={errors.location ? 'input-error' : ''}
                    />
                    {renderError('location')}
                  </label>
                </>
              )}

              {activeTab === 'signin' && (
                <>
                  <label className="field">
                    <span>Email *</span>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="user@example.com"
                      className={errors.email ? 'input-error' : ''}
                    />
                    {renderError('email')}
                  </label>

                  <label className="field">
                    <span>Password *</span>
                    <input
                      type="password"
                      {...register('password')}
                      placeholder="••••••••"
                      className={errors.password ? 'input-error' : ''}
                    />
                    {renderError('password')}
                  </label>
                </>
              )}

              <button type="submit" className="submit-button">
                {activeTab === 'signin' ? 'Sign In' : 'Create my free account'}
              </button>
            </form>

            <p className="legal-copy">
              By continuing, you agree to our Terms and conditions and Refund policy.
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}

export default SignupFormUI
