class ContestsController < ApplicationController
  def index
    @contests = Contest.all
  end

  def show
    @contest = Contest.find(params[:id])
  end

  def comment
    @contest = Contest.find(params[:id])
    new_comment = @contest.comments.create(comment_params)
    render :json => new_comment.to_json, :status => 200
  end

  def destroy_comment
    @comment = Comment.where(
      :id => params[:comment_id],
      :contest_id => params[:contest_id]
    ).first

    # TODO: Destroy the comment

    render :nothing => true, :status => 200
  end

private

  def comment_params
    params.permit(:side, :username, :comment)
  end

end
