Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:show, :create, :index]
  end

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
end
