FashionFight::Application.routes.draw do



  resources :contests, :only => [:index, :show]
  root 'contests#index'
end
