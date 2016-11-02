Rails.application.routes.draw do
	#define verbs for user routes
	resources :users, only: [:show, :index] do 
		collection { post :create , via: :options }
	end
end
