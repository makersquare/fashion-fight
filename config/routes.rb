FashionFight::Application.routes.draw do

  scope :api do
    post 'contests/:id/comments' => 'contests#comment', :as => :contest_comment_api
  end

  resources :contests, :only => [:index, :show]
  root 'contests#index'
end
