import React, { useState, useEffect } from 'react';
import { X, Github, ExternalLink, Activity, Layers, Terminal, CheckCircle2, Sliders, ShieldAlert, Dumbbell, Brain, Eye } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'simulation'>('overview');

  // Simulation states
  // 1. Sentinel Earthquake simulation state
  const [minMagnitude, setMinMagnitude] = useState<number>(4.0);
  const [selectedSeismicNode, setSelectedSeismicNode] = useState<string>('Davao Trench');

  // 2. Atlas Workout builder state
  const [selectedDay, setSelectedDay] = useState<string>('Day 1 - Push Focus');
  const [exerciseCount, setExerciseCount] = useState<number>(4);

  // 3. ML Model parameter state
  const [testDepth, setTestDepth] = useState<number>(35);
  const [testDistance, setTestDistance] = useState<number>(24);

  // 4. Food CV Dish state
  const [selectedDish, setSelectedDish] = useState<'Adobo' | 'Sinigang' | 'Kare-Kare' | 'Pancit'>('Adobo');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Seismic sample dataset for Sentinel simulation
  const seismicEvents = [
    { name: 'Davao Trench Event', mag: 5.8, depth: '42 km', region: 'Mindanao, PH', status: 'Moderate', lat: '7.1907° N, 126.3456° E' },
    { name: 'Luzon Fault Slip', mag: 4.6, depth: '18 km', region: 'Central Luzon, PH', status: 'Minor', lat: '15.4827° N, 120.9712° E' },
    { name: 'Leyte Geothermal Cluster', mag: 4.2, depth: '12 km', region: 'Eastern Visayas, PH', status: 'Minor', lat: '10.7410° N, 124.7926° E' },
    { name: 'Philippine Trench Outer Ridge', mag: 6.4, depth: '65 km', region: 'Eastern Seaboard, PH', status: 'Strong', lat: '12.8797° N, 127.1234° E' },
    { name: 'Mindoro Strait Event', mag: 3.9, depth: '22 km', region: 'MIMAROPA, PH', status: 'Low', lat: '13.1444° N, 120.7121° E' }
  ];

  const filteredEvents = seismicEvents.filter(ev => ev.mag >= minMagnitude);

  // LightGBM predicted probability calculation
  const predictedRisk = Math.min(96, Math.max(12, Math.round((70 / (testDepth + 10)) * 30 + (50 / (testDistance + 5)) * 25)));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#F8F8F6] dark:bg-[#161616] text-[#171717] dark:text-[#F5F5F5] rounded-2xl border border-[#E5E5E5] dark:border-[#262626] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E5E5] dark:border-[#262626]">
          <div className="space-y-1">
            <div className="text-xs text-[#737373] dark:text-[#A3A3A3] font-mono">
              {project.categoryLabel} · {project.status}
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-[#171717] dark:text-[#F5F5F5]">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-[#E5E5E5] dark:border-[#262626] hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5] rounded-lg border border-transparent hover:border-[#E5E5E5] dark:hover:border-[#262626] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Interactive Tabs */}
        <div className="px-6 border-b border-[#E5E5E5] dark:border-[#262626] bg-neutral-100/50 dark:bg-neutral-900/40">
          <div className="flex items-center gap-2 overflow-x-auto py-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-white dark:bg-[#202020] text-[#171717] dark:text-[#F5F5F5] shadow-xs'
                  : 'text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5]'
              }`}
            >
              Overview & Highlights
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                activeTab === 'architecture'
                  ? 'bg-white dark:bg-[#202020] text-[#171717] dark:text-[#F5F5F5] shadow-xs'
                  : 'text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5]'
              }`}
            >
              Architecture & Data Flow
            </button>
            <button
              onClick={() => setActiveTab('simulation')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                activeTab === 'simulation'
                  ? 'bg-white dark:bg-[#202020] text-[#171717] dark:text-[#F5F5F5] shadow-xs'
                  : 'text-[#737373] dark:text-[#A3A3A3] hover:text-[#171717] dark:hover:text-[#F5F5F5]'
              }`}
            >
              Interactive Concept Sandbox
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Media Visual Banner */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#E5E5E5] dark:border-[#262626] bg-neutral-900">
                <img
                  src={project.imagePath}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Extended Overview Description */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-[#737373] dark:text-[#A3A3A3]">
                  Project Summary
                </h3>
                <p className="text-sm sm:text-base text-[#171717] dark:text-[#D4D4D4] leading-relaxed">
                  {project.fullOverview}
                </p>
              </div>

              {/* Metrics Grid */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-white/70 dark:bg-neutral-900/60"
                    >
                      <div className="text-xs text-[#737373] dark:text-[#A3A3A3]">{metric.label}</div>
                      <div className="text-xl font-bold font-mono text-[#171717] dark:text-[#F5F5F5] mt-1 tabular-nums">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[#737373] dark:text-[#A3A3A3] mt-1">
                        {metric.context}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Core Implemented Highlights */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-[#737373] dark:text-[#A3A3A3]">
                  Key Engineering Highlights
                </h3>
                <ul className="grid grid-cols-1 gap-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171717] dark:text-[#D4D4D4]">
                      <CheckCircle2 className="w-4 h-4 text-[#171717] dark:text-[#F5F5F5] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack List */}
              <div className="space-y-2 pt-2 border-t border-[#E5E5E5] dark:border-[#262626]">
                <div className="text-xs text-[#737373] dark:text-[#A3A3A3]">Technologies Used</div>
                <div className="text-xs font-mono text-[#171717] dark:text-[#E5E5E5] flex flex-wrap gap-x-2 gap-y-1">
                  {project.technologies.map((t, idx) => (
                    <span key={idx}>
                      {t}{idx < project.technologies.length - 1 && <span className="text-[#737373] ml-2">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Architecture & Data Flow */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-white/70 dark:bg-neutral-900/60 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-[#737373] dark:text-[#A3A3A3]">
                  <Layers className="w-4 h-4" />
                  <span>Technical Design Principles</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-[#171717] dark:text-[#D4D4D4]">
                  {project.architectureNotes ? (
                    project.architectureNotes.map((note, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-neutral-100/60 dark:bg-neutral-800/40 border border-[#E5E5E5] dark:border-[#262626]">
                        {note}
                      </div>
                    ))
                  ) : (
                    <p>Designed with clean separation of concerns and robust client-side error handling.</p>
                  )}
                </div>
              </div>

              {/* Pseudo-Flowchart / Architectural Stack Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase text-[#737373] dark:text-[#A3A3A3]">
                  System Pipeline Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-lg border border-[#E5E5E5] dark:border-[#262626] bg-white/50 dark:bg-neutral-900/40 space-y-1.5">
                    <div className="font-semibold text-[#171717] dark:text-[#F5F5F5]">1. Input / Ingestion</div>
                    <div className="text-[#737373] dark:text-[#A3A3A3]">
                      Raw data sources, user interactions, or sensor streams normalized into structured schemas.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg border border-[#E5E5E5] dark:border-[#262626] bg-white/50 dark:bg-neutral-900/40 space-y-1.5">
                    <div className="font-semibold text-[#171717] dark:text-[#F5F5F5]">2. Processing Layer</div>
                    <div className="text-[#737373] dark:text-[#A3A3A3]">
                      State management, vector calculations, or inference models running with zero UI blocking.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-lg border border-[#E5E5E5] dark:border-[#262626] bg-white/50 dark:bg-neutral-900/40 space-y-1.5">
                    <div className="font-semibold text-[#171717] dark:text-[#F5F5F5]">3. Presentation & Cache</div>
                    <div className="text-[#737373] dark:text-[#A3A3A3]">
                      Responsive UI components, interactive charts, and offline-first local persistence.
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet / Configuration Manifest preview */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3] flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Module Contract Specification</span>
                </div>
                <pre className="p-4 rounded-xl bg-neutral-900 text-neutral-100 font-mono text-xs overflow-x-auto border border-neutral-800 leading-relaxed">
{project.id === 'sentinel' && `// Sentinel GIS Coordinate Projection Pipeline
interface SeismicEventNode {
  id: string;
  latitude: number;
  longitude: number;
  magnitude: number;
  depthKm: number;
  timestamp: ISO8601;
}

export function projectEventToViewport(node: SeismicEventNode, mapBounds: LatLngBounds) {
  // WGS84 coordinate normalization with cluster grouping
  return {
    point: calculateMercatorTile(node.latitude, node.longitude),
    intensityClass: node.magnitude >= 6.0 ? 'severe' : node.magnitude >= 4.5 ? 'moderate' : 'minor'
  };
}`}
{project.id === 'atlas' && `// Atlas Offline-First Coach Repository Pattern
abstract class CoachRepository {
  Future<List<ClientRecord>> getRoster({required String coachId});
  Future<void> syncWorkoutPlan(WorkoutSession session);
}

class LocalHiveCoachRepository implements CoachRepository {
  final Box<ClientRecord> _clientBox;
  // Encapsulated offline reads with zero network latency
}`}
{project.id === 'earthquake-ml' && `# LightGBM Stratified Cross-Validation Pipeline
import lightgbm as lgb
from sklearn.model_selection import StratifiedKFold

params = {
    'objective': 'binary',
    'metric': 'binary_logloss',
    'boosting_type': 'gbdt',
    'learning_rate': 0.05,
    'num_leaves': 31,
    'feature_fraction': 0.8
}
# Stratified validation prevents temporal data leakage`}
{project.id === 'filipino-food-cv' && `# YOLOv8 Custom Dataset Fine-Tuning Pipeline
from ultralytics import YOLO

model = YOLO('yolov8n.pt')
results = model.train(
    data='filipino_dishes.yaml',
    epochs=100,
    imgsz=640,
    batch=16,
    mosaic=1.0,
    degrees=15.0
)`}
                </pre>
              </div>
            </div>
          )}

          {/* Tab 3: Interactive Concept Sandbox */}
          {activeTab === 'simulation' && (
            <div className="space-y-6">
              {project.id === 'sentinel' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-white/70 dark:bg-neutral-900/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-[#171717] dark:text-[#F5F5F5] flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-amber-500" />
                        <span>Interactive Seismic Threshold Scanner</span>
                      </div>
                      <div className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3]">
                        Showing {filteredEvents.length} Active Events
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs text-[#737373] dark:text-[#A3A3A3]">
                        <span>Filter Minimum Magnitude</span>
                        <span className="font-mono font-bold text-[#171717] dark:text-[#F5F5F5]">M{minMagnitude.toFixed(1)}+</span>
                      </div>
                      <input
                        type="range"
                        min="3.5"
                        max="6.0"
                        step="0.1"
                        value={minMagnitude}
                        onChange={(e) => setMinMagnitude(parseFloat(e.target.value))}
                        className="w-full accent-[#171717] dark:accent-white cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Simulated Telemetry Feed */}
                  <div className="space-y-2">
                    <div className="text-xs text-[#737373] dark:text-[#A3A3A3]">Detected Regional Seismic Nodes:</div>
                    <div className="grid grid-cols-1 gap-2">
                      {filteredEvents.map((ev, idx) => (
                        <div
                          key={idx}
                          onClick={() => setSelectedSeismicNode(ev.name)}
                          className={`p-3 rounded-lg border text-xs cursor-pointer transition-all flex items-center justify-between ${
                            selectedSeismicNode === ev.name
                              ? 'border-[#171717] dark:border-white bg-neutral-100 dark:bg-neutral-800'
                              : 'border-[#E5E5E5] dark:border-[#262626] bg-white/40 dark:bg-neutral-900/30 hover:border-neutral-400'
                          }`}
                        >
                          <div>
                            <div className="font-semibold text-[#171717] dark:text-[#F5F5F5]">{ev.name}</div>
                            <div className="text-[11px] text-[#737373] dark:text-[#A3A3A3]">{ev.region} · {ev.lat}</div>
                          </div>
                          <div className="text-right font-mono">
                            <div className="font-bold text-sm text-[#171717] dark:text-[#F5F5F5]">M{ev.mag.toFixed(1)}</div>
                            <div className="text-[11px] text-[#737373] dark:text-[#A3A3A3]">Depth: {ev.depth}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'atlas' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-white/70 dark:bg-neutral-900/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-[#171717] dark:text-[#F5F5F5] flex items-center gap-2">
                        <Dumbbell className="w-4 h-4 text-emerald-500" />
                        <span>Workout Session Builder Sandbox</span>
                      </div>
                      <div className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3]">Local DB Mock</div>
                    </div>

                    <div className="flex gap-2">
                      {['Day 1 - Push Focus', 'Day 2 - Pull Focus', 'Day 3 - Legs & Core'].map((day) => (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className={`px-3 py-1 text-xs rounded-md border transition-all ${
                            selectedDay === day
                              ? 'bg-[#171717] dark:bg-white text-white dark:text-[#111111] border-transparent font-medium'
                              : 'border-[#E5E5E5] dark:border-[#262626] text-[#737373] dark:text-[#A3A3A3]'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between text-xs text-[#737373] dark:text-[#A3A3A3]">
                        <span>Prescribed Exercises</span>
                        <span className="font-mono font-bold text-[#171717] dark:text-[#F5F5F5]">{exerciseCount} movements</span>
                      </div>
                      <div className="space-y-1.5 text-xs font-mono">
                        <div className="p-2.5 rounded-md bg-neutral-100 dark:bg-neutral-800 flex justify-between">
                          <span>1. Barbell Flat Bench Press</span>
                          <span className="text-[#737373] dark:text-[#A3A3A3]">4 sets × 8-10 reps @ 80kg</span>
                        </div>
                        <div className="p-2.5 rounded-md bg-neutral-100 dark:bg-neutral-800 flex justify-between">
                          <span>2. Incline Dumbbell Press</span>
                          <span className="text-[#737373] dark:text-[#A3A3A3]">3 sets × 12 reps @ 26kg</span>
                        </div>
                        <div className="p-2.5 rounded-md bg-neutral-100 dark:bg-neutral-800 flex justify-between">
                          <span>3. Standing Overhead Cable Tricep Ext</span>
                          <span className="text-[#737373] dark:text-[#A3A3A3]">3 sets × 15 reps</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'earthquake-ml' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-white/70 dark:bg-neutral-900/60 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-[#171717] dark:text-[#F5F5F5] flex items-center gap-2">
                        <Brain className="w-4 h-4 text-indigo-500" />
                        <span>LightGBM Feature Sensitivity Explorer</span>
                      </div>
                      <div className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3]">Inference Test</div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-[#737373] dark:text-[#A3A3A3]">
                          <span>Hypocenter Depth</span>
                          <span className="font-mono font-bold text-[#171717] dark:text-[#F5F5F5]">{testDepth} km</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="80"
                          value={testDepth}
                          onChange={(e) => setTestDepth(parseInt(e.target.value))}
                          className="w-full accent-[#171717] dark:accent-white cursor-pointer"
                        />
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-[#737373] dark:text-[#A3A3A3]">
                          <span>Distance to Major Fault</span>
                          <span className="font-mono font-bold text-[#171717] dark:text-[#F5F5F5]">{testDistance} km</span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="60"
                          value={testDistance}
                          onChange={(e) => setTestDistance(parseInt(e.target.value))}
                          className="w-full accent-[#171717] dark:accent-white cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-medium text-[#171717] dark:text-[#F5F5F5]">Computed Anomaly Score</div>
                        <div className="text-[11px] text-[#737373] dark:text-[#A3A3A3]">Based on gradient boosted decision tree leaves</div>
                      </div>
                      <div className="text-2xl font-mono font-bold text-[#171717] dark:text-[#F5F5F5] tabular-nums">
                        {predictedRisk}%
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {project.id === 'filipino-food-cv' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-white/70 dark:bg-neutral-900/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-[#171717] dark:text-[#F5F5F5] flex items-center gap-2">
                        <Eye className="w-4 h-4 text-rose-500" />
                        <span>YOLOv8 Detection Class Explorer</span>
                      </div>
                      <div className="text-xs font-mono text-[#737373] dark:text-[#A3A3A3]">7,461 Image Base</div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {(['Adobo', 'Sinigang', 'Kare-Kare', 'Pancit'] as const).map((dish) => (
                        <button
                          key={dish}
                          onClick={() => setSelectedDish(dish)}
                          className={`px-3 py-1 text-xs rounded-md border transition-all ${
                            selectedDish === dish
                              ? 'bg-[#171717] dark:bg-white text-white dark:text-[#111111] border-transparent font-medium'
                              : 'border-[#E5E5E5] dark:border-[#262626] text-[#737373] dark:text-[#A3A3A3]'
                          }`}
                        >
                          {dish}
                        </button>
                      ))}
                    </div>

                    <div className="p-4 rounded-lg bg-neutral-900 text-neutral-100 font-mono text-xs space-y-2 border border-neutral-800">
                      <div className="flex justify-between text-neutral-400 border-b border-neutral-800 pb-2">
                        <span>Class: {selectedDish}</span>
                        <span>Model: YOLOv8n (640x640)</span>
                      </div>
                      <div className="space-y-1 pt-1">
                        <div className="flex justify-between">
                          <span>Detection Confidence</span>
                          <span className="text-emerald-400 font-bold tabular-nums">
                            {selectedDish === 'Adobo' ? '94.2%' : selectedDish === 'Sinigang' ? '91.8%' : selectedDish === 'Kare-Kare' ? '88.5%' : '93.0%'}
                          </span>
                        </div>
                        <div className="flex justify-between text-neutral-400">
                          <span>Bounding Box Coordinates</span>
                          <span>[x: 142, y: 88, w: 320, h: 290]</span>
                        </div>
                        <div className="flex justify-between text-neutral-400">
                          <span>Edge Inference Latency</span>
                          <span>18.4 ms (TensorRT / CPU)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-neutral-100/50 dark:bg-neutral-900/50 border-t border-[#E5E5E5] dark:border-[#262626] flex items-center justify-between">
          <div className="text-xs text-[#737373] dark:text-[#A3A3A3]">
            Press <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono text-[10px]">ESC</kbd> to close
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-[#171717] dark:text-[#F5F5F5] hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg transition-colors"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
