# 🚀 Portfolio Deployment Guide

This guide will help you deploy your full-stack portfolio with React frontend and Node.js backend.

## 📋 Prerequisites

- GitHub account
- MongoDB Atlas account (free)
- Vercel account (free)
- Railway account (free)

## 🗄️ Step 1: Set Up MongoDB Atlas (Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster (choose the free M0 tier)
4. Create a database user:
   - Go to "Database Access" → "Add New Database User"
   - Username: `portfolio-user`
   - Password: Generate a secure password
5. Whitelist your IP:
   - Go to "Network Access" → "Add IP Address"
   - Add `0.0.0.0/0` (allows all IPs for deployment)
6. Get your connection string:
   - Go to "Clusters" → "Connect" → "Connect your application"
   - Copy the connection string (replace `<password>` with your password)

## 🖥️ Step 2: Deploy Backend to Railway

### Option A: Railway (Recommended - Free)

1. Go to [Railway](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Choose the `backend` folder as the root directory
6. Add environment variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `PORT`: `5000`
   - `FRONTEND_URL`: `https://your-portfolio.vercel.app` (update after frontend deployment)
7. Deploy!

### Option B: Render (Alternative - Free)

1. Go to [Render](https://render.com)
2. Sign up with GitHub
3. Click "New" → "Web Service"
4. Connect your repository
5. Configure:
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add environment variables (same as Railway)
7. Deploy!

## 🎨 Step 3: Deploy Frontend to Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project" → "Import Git Repository"
4. Select your repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (root of your project)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Deploy!

## 🔗 Step 4: Connect Frontend to Backend

After both deployments are complete:

1. **Get your backend URL**:
   - Railway: Check your project dashboard for the URL
   - Render: Check your service dashboard for the URL

2. **Update frontend API calls**:
   - Find where you make API calls in your frontend
   - Replace `http://localhost:5000` with your backend URL

3. **Update backend CORS**:
   - Go to your backend deployment dashboard
   - Update the `FRONTEND_URL` environment variable with your Vercel URL

## 🔧 Step 5: Environment Variables Summary

### Backend Environment Variables:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
PORT=5000
FRONTEND_URL=https://your-portfolio.vercel.app
```

### Frontend Environment Variables (if needed):
```
VITE_API_URL=https://your-backend.railway.app
```

## 🎯 Step 6: Test Your Deployment

1. Visit your Vercel URL
2. Test the contact form
3. Check if messages are being saved to MongoDB
4. Verify all sections work properly

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors**:
   - Make sure `FRONTEND_URL` is set correctly in backend
   - Check that your frontend URL is in the CORS origins list

2. **Database Connection Issues**:
   - Verify MongoDB connection string is correct
   - Check if IP is whitelisted in MongoDB Atlas

3. **Build Failures**:
   - Check build logs in deployment platform
   - Ensure all dependencies are in package.json

4. **Environment Variables**:
   - Double-check all environment variables are set
   - Restart deployment after adding new variables

## 📱 Custom Domain (Optional)

### For Vercel (Frontend):
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### For Railway (Backend):
1. Go to your Railway project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## 💰 Cost Breakdown

- **MongoDB Atlas**: Free (M0 tier)
- **Vercel**: Free (hobby plan)
- **Railway**: Free (hobby plan)
- **Total**: $0/month

## 🎉 You're Done!

Your portfolio is now live and accessible worldwide! Share your Vercel URL with potential employers and clients.

## 📞 Support

If you encounter any issues:
1. Check the deployment logs
2. Verify environment variables
3. Test locally first
4. Check platform-specific documentation


