Rails.application.routes.draw do
  resources :todos, except: [:update, :destroy]
  post '/todos/:id', to: 'todos#update'
  post '/todos/:id/delete', to: 'todos#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
