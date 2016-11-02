# This file is used by Rack-based servers to start the application.

require_relative 'config/environment'

run Rails.application

use Rack::Cors do

	#this block is meant to specify allowed origins 
	#got this from https://github.com/cyu/rack-cors
	#leaving open to all methods and origins for brevity and ease
  allow do
    origins '*'
    resource '/public/*', :headers => :any
  end
end