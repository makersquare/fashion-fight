FashionFight::Application.routes.draw do

  devise_for :users

  scope :api do
    post 'contests/:id/comments' => 'contests#comment', :as => :contest_comment_api
  end

  resources :contests, :only => [:index, :show]
  root 'contests#index'
end
