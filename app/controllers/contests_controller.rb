class ContestsController < ApplicationController
  def index
    @contests = Contest.all
  end

  def show
    @contest = Contest.find(params[:id])
  end
end
