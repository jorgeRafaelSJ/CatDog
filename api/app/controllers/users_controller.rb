class UsersController < ApplicationController
	def index

		dear = params
		print dear
		render :json => dear
	end

	def create
		print params.class
		@user = User.new(user_params)

		if @user.save
			render :json => @user
		else 
			render :json => { error => "there was an error"}
		end
	end

	def user_params
	  params.permit(:height, :weight)
	end
end
